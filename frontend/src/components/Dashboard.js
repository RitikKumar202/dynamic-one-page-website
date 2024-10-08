import React, { useState } from 'react';

function Dashboard({ bannerData, updateBannerData }) {
    const [formData, setFormData] = useState({
        description: '',
        timer: '',
        link: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBannerData(formData);
        // Clear the input fields after form submission
        setFormData({
            description: '',
            timer: '',
            link: '',
        });
    };

    return (
        <div className="dashboard">
            <h2 className="dashboard-title">Dashboard</h2>
            <form className="dashboard-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Description:
                    </label>
                    <input
                        id="description"
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="timer" className="form-label">
                        Timer (seconds):
                    </label>
                    <input
                        id="timer"
                        type="number"
                        name="timer"
                        value={formData.timer}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="link" className="form-label">
                        Link:
                    </label>
                    <input
                        id="link"
                        type="url"
                        name="link"
                        value={formData.link}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                </div>
                <button type="submit" className="form-button">Update Banner</button>
            </form>
        </div>
    );
}

export default Dashboard;
