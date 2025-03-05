function loadPage(page) {
    let content = document.getElementById("mainContent");
    switch(page) {
        case 'dashboard':
            content.innerHTML = "<h2>Dashboard</h2><p>View upcoming events and statistics.</p>";
            break;
        case 'patients':
            content.innerHTML = `<h2>Patient Management</h2>
            <form>
                <label>Patient ID:</label>
                <input type="text" placeholder="Generated Unique ID" readonly>
                <label>Patient Name:</label>
                <input type="text" placeholder="Enter full name">
                <label>Age:</label>
                <input type="number" placeholder="Enter age">
                <label>Diagnosis:</label>
                <textarea placeholder="Enter diagnosis details"></textarea>
                <button type="submit">Save Record</button>
            </form>`;
            break;
        case 'surgery':
            content.innerHTML = `<h2>Surgery Scheduling</h2>
            <form>
                <label>Patient ID:</label>
                <input type="text" placeholder="Enter patient ID">
                <label>Procedure Type:</label>
                <input type="text" placeholder="Enter procedure type">
                <label>Date & Time:</label>
                <input type="datetime-local">
                <label>Surgeon Assigned:</label>
                <input type="text" placeholder="Enter surgeon name">
                <label>Pre-Surgery Photo:</label>
                <input type="file">
                <label>Post-Surgery Photos (1 week, 2 weeks):</label>
                <input type="file" multiple>
                <button type="submit">Schedule Surgery</button>
            </form>`;
            break;
        case 'wound':
            content.innerHTML = `<h2>Wound Care Tracking</h2>
            <form>
                <label>Patient ID:</label>
                <input type="text" placeholder="Enter patient ID">
                <label>Wound Location:</label>
                <input type="text" placeholder="Enter body part">
                <label>Wound Image:</label>
                <input type="file">
                <label>Wound Description:</label>
                <textarea placeholder="Describe wound condition"></textarea>
                <label>Next Dressing Date:</label>
                <input type="date">
                <button type="submit">Save Record</button>
            </form>`;
            break;
        default:
            content.innerHTML = "<h2>Welcome</h2><p>Select a menu option.</p>";
            break;
    }
}
