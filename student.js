// Expandable Section Functionality
document.addEventListener('DOMContentLoaded', function() {
    const expandableHeaders = document.querySelectorAll('.expandable-header');

    expandableHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const expandableItem = this.closest('.expandable-item');
            const isExpanded = expandableItem.getAttribute('aria-expanded') === 'true';

            // Close all other expanded items
            document.querySelectorAll('.expandable-item[aria-expanded="true"]').forEach(item => {
                if (item !== expandableItem) {
                    item.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            expandableItem.setAttribute('aria-expanded', !isExpanded);
        });

        // Keyboard navigation support
        header.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.click();
            }
        });
    });

    // Edit Button Handler
    const editBtn = document.querySelector('.edit-btn');
    if (editBtn) {
        editBtn.addEventListener('click', function() {
            console.log("[v0] Edit student profile clicked");
            alert('Edit Student Profile - Feature coming soon');
        });
    }

    // Delete Button Handler
    const deleteBtn = document.querySelector('.delete-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', function() {
            console.log("[v0] Delete student profile clicked");
            if (confirm('Are you sure you want to delete this student record?')) {
                alert('Student Record Deleted - Feature coming soon');
            }
        });
    }

    // Add Student Button Handler
    const addStudentBtn = document.querySelector('.add-student-btn');
    if (addStudentBtn) {
        addStudentBtn.addEventListener('click', function() {
            console.log("[v0] Add Student button clicked");
            alert('Add New Student - Feature coming soon');
        });
    }

    // External Links
    const docDownloads = document.querySelectorAll('.doc-download');
    docDownloads.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            console.log("[v0] Document download clicked");
            alert('Download feature coming soon');
        });
    });
});
