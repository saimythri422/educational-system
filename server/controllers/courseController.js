const pool = require('../config/db');

// Fallback seed courses in case MySQL server is not active during initial test
const fallbackCourses = [
    {
        id: 1,
        name: "B.Tech Engineering",
        category: "Engineering",
        description: "Explore engineering disciplines, software development, and technical concepts.",
        duration: "4 Years",
        fee: 95000,
        emoji: "⚙️"
    },
    {
        id: 2,
        name: "Computer Science",
        category: "Computer",
        description: "Learn programming languages, data structures, algorithms, and software fundamentals.",
        duration: "3 Years",
        fee: 85000,
        emoji: "💻"
    },
    {
        id: 3,
        name: "B.Sc Science",
        category: "Science",
        description: "Explore core scientific concepts, laboratory work, and subject fundamentals.",
        duration: "3 Years",
        fee: 60000,
        emoji: "🔬"
    },
    {
        id: 4,
        name: "B.Com Commerce",
        category: "Commerce",
        description: "Explore accounting, financial management, business analytics, and commerce subjects.",
        duration: "3 Years",
        fee: 55000,
        emoji: "📊"
    },
    {
        id: 5,
        name: "Computer Applications",
        category: "Computer",
        description: "Build hands-on knowledge of computer applications, database design, and IT tools.",
        duration: "3 Years",
        fee: 70000,
        emoji: "🖥️"
    },
    {
        id: 6,
        name: "Electronics & Communication",
        category: "Engineering",
        description: "Explore electronic systems, microprocessors, signal processing, and communication technology.",
        duration: "4 Years",
        fee: 90000,
        emoji: "📡"
    }
];

exports.getAllCourses = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM courses ORDER BY id ASC');
        if (rows && rows.length > 0) {
            return res.json({ success: true, count: rows.length, data: rows, source: 'mysql' });
        }
        return res.json({ success: true, count: fallbackCourses.length, data: fallbackCourses, source: 'seed' });
    } catch (error) {
        console.warn('Database query error, returning fallback courses:', error.message);
        return res.json({ success: true, count: fallbackCourses.length, data: fallbackCourses, source: 'fallback' });
    }
};

exports.getCourseById = async (req, res) => {
    const courseId = parseInt(req.params.id);
    try {
        const [rows] = await pool.query('SELECT * FROM courses WHERE id = ?', [courseId]);
        if (rows.length > 0) {
            return res.json({ success: true, data: rows[0] });
        }
        const fallback = fallbackCourses.find(c => c.id === courseId);
        if (fallback) {
            return res.json({ success: true, data: fallback });
        }
        return res.status(404).json({ success: false, message: 'Course not found' });
    } catch (error) {
        const fallback = fallbackCourses.find(c => c.id === courseId);
        if (fallback) {
            return res.json({ success: true, data: fallback });
        }
        return res.status(500).json({ success: false, message: error.message });
    }
};

exports.createCourse = async (req, res) => {
    const { name, category, description, duration, fee, emoji } = req.body;
    if (!name || !category || !description) {
        return res.status(400).json({ success: false, message: 'Name, category, and description are required.' });
    }

    try {
        const [result] = await pool.query(
            'INSERT INTO courses (name, category, description, duration, fee, emoji) VALUES (?, ?, ?, ?, ?, ?)',
            [name, category, description, duration || '3 Years', fee || 50000, emoji || '📚']
        );
        return res.status(201).json({
            success: true,
            message: 'Course created successfully',
            courseId: result.insertId
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};
