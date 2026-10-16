const pool = require('../config/db');

// In-memory fallback in case MySQL is offline
const fallbackEnquiries = [];

exports.submitEnquiry = async (req, res) => {
    const { studentName, email, phone, courseName, message } = req.body;

    if (!studentName || !email || !phone || !courseName) {
        return res.status(400).json({
            success: false,
            message: 'All fields (Student Name, Email, Phone, Course) are required.'
        });
    }

    // Phone validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.trim())) {
        return res.status(400).json({
            success: false,
            message: 'Phone number must be exactly 10 digits.'
        });
    }

    try {
        const [result] = await pool.query(
            'INSERT INTO enquiries (student_name, email, phone, course_name, message) VALUES (?, ?, ?, ?, ?)',
            [studentName.trim(), email.trim(), phone.trim(), courseName.trim(), message ? message.trim() : '']
        );

        return res.status(201).json({
            success: true,
            message: `Enquiry submitted successfully! Thank you, ${studentName}.`,
            enquiryId: result.insertId
        });
    } catch (error) {
        console.warn('MySQL unavailable, saving to memory fallback:', error.message);
        const fallbackItem = {
            id: fallbackEnquiries.length + 1,
            student_name: studentName,
            email,
            phone,
            course_name: courseName,
            message: message || '',
            status: 'Pending',
            created_at: new Date()
        };
        fallbackEnquiries.push(fallbackItem);

        return res.status(201).json({
            success: true,
            message: `Enquiry received (in-memory mode)! Thank you, ${studentName}.`,
            enquiry: fallbackItem
        });
    }
};

exports.getAllEnquiries = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM enquiries ORDER BY created_at DESC');
        return res.json({ success: true, count: rows.length, data: rows });
    } catch (error) {
        return res.json({
            success: true,
            count: fallbackEnquiries.length,
            data: fallbackEnquiries,
            notice: 'Serving in-memory enquiries'
        });
    }
};
