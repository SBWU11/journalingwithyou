import { dateMemories } from './data.js';

console.log('Script loaded, dateMemories:', dateMemories);

const dateList = document.getElementById('date-list');
const contentArea = document.getElementById('date-content');
let isAscending = true;

// Load and display date list
function loadDateList() {
    console.log('Loading date list...');
    dateList.innerHTML = '';
    
    // Sort dates
    const sortedDates = [...dateMemories].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return isAscending ? dateA - dateB : dateB - dateA;
    });

    console.log('Sorted dates:', sortedDates);

    sortedDates.forEach(memory => {
        const button = createDateButton(memory);
        dateList.appendChild(button);
    });

    // Display first memory if it exists
    if (sortedDates.length > 0) {
        displayMemory(sortedDates[0]);
    }
}

function createDateButton(memory) {
    const button = document.createElement('button');
    const date = new Date(memory.date);
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    button.innerHTML = `<span class="date-part">${formattedDate}</span><span class="title-part">${memory.title}</span>`;
    button.addEventListener('click', () => displayMemory(memory));
    return button;
}

// Display a specific memory
function displayMemory(memory) {
    console.log('Displaying memory:', memory);
    const date = new Date(memory.date).toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    contentArea.innerHTML = `
        <div class="date-memory">
            <h3>${memory.title}</h3>
            <h4>${date}</h4>
            <p>${memory.description}</p>
            ${memory.images.length > 0 || memory.videos.length > 0 ? `
                <div class="media-gallery">
                    ${memory.images.map(img => 
                        `<img src="${img}" alt="Date memory image">`
                    ).join('')}
                    ${memory.videos.map(video => 
                        `<video controls><source src="${video}"></video>`
                    ).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

// Add sort toggle functionality
document.getElementById('sort-toggle').addEventListener('click', () => {
    isAscending = !isAscending;
    const button = document.getElementById('sort-toggle');
    button.classList.toggle('descending', !isAscending);
    loadDateList();
});

// Initialize the date list
console.log('Initializing date list...');
loadDateList();
