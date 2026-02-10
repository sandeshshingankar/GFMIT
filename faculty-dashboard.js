// Student data assigned to each faculty member
// ================= GET FACULTY FROM URL =================
const params = new URLSearchParams(window.location.search);
const facultyKey = params.get('faculty') || 'nitin-dhawas';

const facultyStudentData = {
    'Dr. Nitin Dhawas': [
        { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
          ],
    'Prof. Dheeraj Patil': [
        { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
           ],
    'Prof. Nitin Wankhade': [
       { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
           ],
    'Prof. Roshni Narkhede': [
        { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
          ],
    'Prof. Sonali Dongare': [
       { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
          ],
    'Prof. Vivek Nagargoje': [
       { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
         ],
    'Prof. Vanita Deshmukh': [
       { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
           ],
    'Prof. Hemlata Mane': [
       { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
            ],
    'Prof. Bharti Dhote': [
       { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
            ],
    'Prof. Ajay Sonawane': [
       { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
             ],
};

// Faculty profile data
const facultyProfiles = {
    'Dr. Nitin Dhawas': {
        designation: 'Assistant Professor',
        expertise: 'Software Testing, Information Security',
        qualification: 'ME (Computer Engineering)',
        experience: '9.2 Years Teaching',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/dr-nitin-dhawas.png'
    },
    'Prof. Dheeraj Patil': {
        designation: 'Associate Professor',
        expertise: 'Web Development, Database Management',
        qualification: 'BE (Computer Engineering)',
        experience: '7.5 Years Teaching',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mr-diraj-patil.png'
    },
    'Prof. Nitin Wankhade': {
        designation: 'Assistant Professor',
        expertise: 'Mobile Application Development, Cloud Computing',
        qualification: 'BE (Computer Engineering)',
        experience: '6 Years Teaching',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/dr-nitin-wankhande.png'
    },
    'Prof. Roshni Narkhede': {
        designation: 'Assistant Professor',
        expertise: 'Data Structures, Algorithms, Artificial Intelligence',
        qualification: 'ME (Computer Science)',
        experience: '5.5 Years Teaching',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mrs-roshini.png'
    },
    'Prof. Sonali Dongare': {
        designation: 'Assistant Professor',
        expertise: 'Java Programming, Object-Oriented Design',
        qualification: 'BE (Computer Engineering)',
        experience: '5 Years Teaching',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mrs-sonali-dongre.png'
    },
    'Prof. Vivek Nagargoje': {
        designation: 'Assistant Professor',
        expertise: 'Python Programming, Machine Learning',
        qualification: 'BE (Information Technology)',
        experience: '4.5 Years Teaching',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mr-niraj.png'
    },
    'Prof. Vanita Deshmukh': {
        designation: 'Assistant Professor',
        expertise: 'Network Administration, System Security',
        qualification: 'MCA (Computer Applications)',
        experience: '4 Years Teaching',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/11/prof-sunita-deskmukha.png'
    },
    'Prof. Hemlata Mane': {
        designation: 'Assistant Professor',
        expertise: 'Web Technologies, Frontend Development',
        qualification: 'BE (Computer Engineering)',
        experience: '3.5 Years Teaching',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/hemlata-mane.png'
    },
    'Prof. Bharti Dhote': {
        designation: 'Assistant Professor',
        expertise: 'C Programming, System Administration',
        qualification: 'BE (Computer Engineering)',
        experience: '3 Years Teaching',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mrs-bharti.png'
    },
    'Prof. Ajay Sonawane': {
        designation: 'Assistant Professor',
        expertise: 'Operating Systems, Linux Administration',
        qualification: 'BE (Computer Science)',
        experience: '2.5 Years Teaching',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/11/prof-ajay-tukaram-sonawane.png'
    },
};

let currentFacultyName = '';
let allStudents = [];

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    currentFacultyName = urlParams.get('faculty') || 'Dr. Nitin Dhawas';

    loadFacultyProfile();
    loadStudents();
    setupSearch();
});

// Load faculty profile
function loadFacultyProfile() {
    const profileContainer = document.getElementById('faculty-profile');
    const profile = facultyProfiles[currentFacultyName];

    if (!profile) {
        profileContainer.innerHTML = '<p>Faculty profile not found.</p>';
        return;
    }

    profileContainer.innerHTML = `
        <img src="${profile.image}" alt="${currentFacultyName}" class="faculty-profile-image">
        <div class="faculty-profile-info">
            <h2>${currentFacultyName}</h2>
            <p class="designation">${profile.designation}</p>
            <div class="faculty-detail-item">
                <strong>Expertise</strong>
                ${profile.expertise}
            </div>
            <div class="faculty-detail-item">
                <strong>Qualification</strong>
                ${profile.qualification}
            </div>
            <div class="faculty-detail-item">
                <strong>Experience</strong>
                ${profile.experience}
            </div>
            <div class="faculty-actions">
                <button class="action-btn btn-edit" aria-label="Edit faculty profile">
                    ✎ Edit Profile
                </button>
                <button class="action-btn btn-message" aria-label="Send message to students">
                    💬 Send Message
                </button>
            </div>
        </div>
    `;
}

// Load students
function loadStudents() {
    const students = facultyStudentData[currentFacultyName] || [];
    allStudents = students;
    renderStudents(students);
}

// Render students in table
function renderStudents(students) {
    const tbody = document.getElementById('students-tbody');
    const noResults = document.getElementById('no-results');

    if (students.length === 0) {
        tbody.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    tbody.innerHTML = students.map(student => `
        <tr>
            <td><strong>${student.name}</strong></td>
            <td>${student.rollNo}</td>
            <td>${student.class}</td>
            <td>${student.contact}</td>
            <td>${student.email}</td>
            <td>
                <div class="table-actions">
                    <button class="table-action-btn btn-view" aria-label="View student details">👁 View</button>
                    <button class="table-action-btn btn-edit-student" aria-label="Edit student information">✎ Edit</button>
                    <button class="table-action-btn btn-attendance" aria-label="View attendance">📋 Attendance</button>
                    <button class="table-action-btn btn-academic" aria-label="View academic details">📊 Academics</button>
                </div>
            </td>
        </tr>
    `).join('');

    // Add event listeners to action buttons
    document.querySelectorAll('.table-action-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.textContent.toLowerCase();
            alert(`Action: ${action}`);
        });

        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.querySelector('.search-btn');

    const performSearch = () => {
        const query = searchInput.value.toLowerCase();
        const filtered = allStudents.filter(student => 
            student.name.toLowerCase().includes(query) ||
            student.rollNo.includes(query) ||
            student.email.toLowerCase().includes(query)
        );
        renderStudents(filtered);
    };

    searchInput.addEventListener('input', performSearch);
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}
