import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [students, setStudents] = useState([]);
  const [searchReg, setSearchReg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    email: '',
    semester: '',
    subjects: [
      { name: 'Data Structures', mse: '', ese: '' },
      { name: 'Database Management', mse: '', ese: '' },
      { name: 'Web Technologies', mse: '', ese: '' },
      { name: 'Operating Systems', mse: '', ese: '' }
    ]
  });

  const API_URL = 'http://localhost:8080/api/students';

  useEffect(() => {
    if (activeTab === 'view') {
      fetchAllStudents();
    }
  }, [activeTab]);

  const fetchAllStudents = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const calculateGrade = (total) => {
    if (total >= 90) return { grade: 'S', color: '#9333ea' };
    if (total >= 80) return { grade: 'A', color: '#16a34a' };
    if (total >= 70) return { grade: 'B', color: '#2563eb' };
    if (total >= 60) return { grade: 'C', color: '#ca8a04' };
    if (total >= 50) return { grade: 'D', color: '#ea580c' };
    return { grade: 'F', color: '#dc2626' };
  };

  const handleSubmit = async () => {
    const studentData = {
      ...formData,
      subjects: formData.subjects.map(sub => ({
        ...sub,
        mse: parseFloat(sub.mse),
        ese: parseFloat(sub.ese),
        total: parseFloat(sub.mse) + parseFloat(sub.ese) // ✅ Correct total
      }))
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData)
      });

      if (response.ok) {
        alert('Student result added successfully!');
        setFormData({
          name: '',
          regNo: '',
          email: '',
          semester: '',
          subjects: [
            { name: 'Data Structures', mse: '', ese: '' },
            { name: 'Database Management', mse: '', ese: '' },
            { name: 'Web Technologies', mse: '', ese: '' },
            { name: 'Operating Systems', mse: '', ese: '' }
          ]
        });
      }
    } catch (error) {
      alert('Error adding student result');
      console.error(error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`${API_URL}/${searchReg}`);
      const data = await response.json();
      setStudents([data]);
    } catch (error) {
      alert('Student not found');
      console.error(error);
    }
  };

  const updateSubject = (index, field, value) => {
    const newSubjects = [...formData.subjects];
    newSubjects[index][field] = value;
    setFormData({ ...formData, subjects: newSubjects });
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo-circle">🎓</div>
            <div>
              <h1 className="header-title">VIT Result Portal</h1>
              <p className="header-subtitle">Vishwakarma Institute of Technology</p>
            </div>
          </div>
          <div className="award-icon">🏆</div>
        </div>
      </header>

      <div className="container">
        <div className="tabs-container">
          <button
            onClick={() => setActiveTab('add')}
            className={`tab ${activeTab === 'add' ? 'tab-active' : ''}`}
          >
            📚 Add Result
          </button>
          <button
            onClick={() => setActiveTab('view')}
            className={`tab ${activeTab === 'view' ? 'tab-active' : ''}`}
          >
            📊 View Results
          </button>
        </div>

        <div className="content">
          {activeTab === 'add' ? (
            <div className="card">
              <div className="card-header">
                <h2 className="section-title">📖 Add Student Result</h2>
                <p className="section-subtitle">Enter student details and marks for the semester</p>
              </div>

              <div className="form">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">👤 Student Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="form-input"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">#️⃣ Registration Number</label>
                    <input
                      type="text"
                      value={formData.regNo}
                      onChange={(e) => setFormData({...formData, regNo: e.target.value})}
                      className="form-input"
                      placeholder="e.g., 21BCE1234"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">✉️ Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="form-input"
                      placeholder="student@vitstudent.ac.in"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">📅 Semester</label>
                    <select
                      value={formData.semester}
                      onChange={(e) => setFormData({...formData, semester: e.target.value})}
                      className="form-input"
                    >
                      <option value="">Select Semester</option>
                      {[1,2,3,4,5,6,7,8].map(sem => (
                        <option key={sem} value={sem}>Semester {sem}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="subjects-section">
                  <h3 className="subjects-title">🎯 Subject Marks</h3>
                  {formData.subjects.map((subject, index) => (
                    <div key={index} className="subject-card">
                      <h4 className="subject-name">{subject.name}</h4>
                      <div className="subject-inputs">
                        <div className="form-group">
                          <label className="form-label-small">MSE Marks (30)</label>
                          <input
                            type="number"
                            min="0"
                            max="30"
                            step="0.01"
                            value={subject.mse}
                            onChange={(e) => updateSubject(index, 'mse', e.target.value)}
                            className="form-input"
                            placeholder="Out of 30"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label-small">ESE Marks (70)</label>
                          <input
                            type="number"
                            min="0"
                            max="70"
                            step="0.01"
                            value={subject.ese}
                            onChange={(e) => updateSubject(index, 'ese', e.target.value)}
                            className="form-input"
                            placeholder="Out of 70"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button onClick={handleSubmit} className="submit-btn">
                  Submit Result
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="search-card">
                <input
                  type="text"
                  value={searchReg}
                  onChange={(e) => setSearchReg(e.target.value)}
                  placeholder="Enter Registration Number"
                  className="search-input"
                />
                <button onClick={handleSearch} className="search-btn">
                  🔍 Search
                </button>
                <button onClick={fetchAllStudents} className="view-all-btn">
                  👁️ View All
                </button>
              </div>

              {students.map((student, idx) => {
               
                const totalMarks = student.subjects.reduce(
                  (sum, sub) => sum + (Number(sub.mse) + Number(sub.ese)),
                  0
                );
                const maxMarks = student.subjects.length * 100;
                const percentage = (totalMarks / maxMarks) * 100;
                const overallGrade = calculateGrade(percentage);

                return (
                  <div key={idx} className="result-card">
                    <div className="result-header">
                      <div>
                        <h3 className="student-name">{student.name}</h3>
                        <p className="student-email">{student.email}</p>
                        <div className="student-badges">
                          <span className="badge">Reg: {student.regNo}</span>
                          <span className="badge">Semester: {student.semester}</span>
                        </div>
                      </div>
                      <div className="result-summary">
                        <div className="percentage">{percentage.toFixed(2)}%</div>
                        <div className="grade" style={{color: overallGrade.color}}>
                          Grade: {overallGrade.grade}
                        </div>
                      </div>
                    </div>

                    <div className="result-body">
                      <table className="results-table">
                        <thead>
                          <tr>
                            <th>Subject</th>
                            <th>MSE (30)</th>
                            <th>ESE (70)</th>
                            <th>Total (100)</th>
                            <th>Grade</th>
                          </tr>
                        </thead>
                        <tbody>
                          {student.subjects.map((sub, i) => {
                            const total = Number(sub.mse) + Number(sub.ese); // ✅ correct
                            const grade = calculateGrade(total);
                            return (
                              <tr key={i}>
                                <td className="subject-cell">{sub.name}</td>
                                <td>{Number(sub.mse).toFixed(2)}</td>
                                <td>{Number(sub.ese).toFixed(2)}</td>
                                <td className="total-cell">{total.toFixed(2)}</td>
                                <td>
                                  <span className="grade-badge" style={{color: grade.color}}>
                                    {grade.grade}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default App;







