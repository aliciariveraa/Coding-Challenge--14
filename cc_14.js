// Task 2 - Support Tickets Dynamic Addition

function createSupportTicket(customerName, issueDescription, priority) {
    const ticketContainer = document.getElementById('ticketContainer');

    // Create the ticket div
    const ticketDiv = document.createElement('div');
    ticketDiv.classList.add('ticket');

    // Create and append elements for the ticket
    const nameHeading = document.createElement('h2');
    nameHeading.textContent = `Customer: ${customerName}`;
    ticketDiv.appendChild(nameHeading);

    const issueParagraph = document.createElement('p');
    issueParagraph.textContent = `Issue: ${issueDescription}`;
    ticketDiv.appendChild(issueParagraph);

    const priorityLabel = document.createElement('span');
    priorityLabel.textContent = `Priority: ${priority}`;
    ticketDiv.appendChild(priorityLabel);

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.classList.add('resolve-btn');
    resolveButton.onclick = function() {
        ticketContainer.removeChild(ticketDiv);
    };
    ticketDiv.appendChild(resolveButton);

    // Append the ticket to the container
    ticketContainer.appendChild(ticketDiv);
}

// Example usage: creating a support ticket
createSupportTicket('John Doe', 'Issue with login', 'High');
createSupportTicket('Mary Smith', 'Cannot reset password', 'Medium');


// Task 3 - Highlighting High Priority Tickets
function highlightHighPriorityTickets() {
    const highPriorityTickets = document.querySelectorAll('.ticket span');
    
    // Convert NodeList to an array using Array.from
    const ticketsArray = Array.from(highPriorityTickets);

    // Loop through the tickets and highlight them
    ticketsArray.forEach(ticket => {
        if (ticket.textContent.includes('High')) {
            ticket.parentElement.style.backgroundColor = 'red';
            ticket.parentElement.style.border = '2px solid black';
    });
}

// Call the function to highlight high-priority tickets
highlightHighPriorityTickets();


// Task 4 - Support Ticket Resolution with Event Bubbling

// Event listener on ticketContainer for event bubbling
document.getElementById('ticketContainer').addEventListener('click', function(event) {
    console.log('Ticket clicked:', event.target);
});

// Modify the resolve button event listener to stop bubbling
function addSupportTicket(name, issue, priority) {
    const ticket = document.createElement('div');
    ticket.classList.add('ticket');

    const customerName = document.createElement('h3');
    customerName.textContent = name;
    ticket.appendChild(customerName);

    const issueDescription = document.createElement('p');
    issueDescription.textContent = issue;
    ticket.appendChild(issueDescription);

    const priorityLabel = document.createElement('p');
    priorityLabel.textContent = `Priority: ${priority}`;
    ticket.appendChild(priorityLabel);

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event bubbling
        ticket.remove(); // Remove the ticket
    });
    ticket.appendChild(resolveButton);

    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.appendChild(ticket);
}

// Add tickets
addSupportTicket('Nathan', 'Page crashes', 'Low');
addSupportTicket('William', 'Login issues', 'High');