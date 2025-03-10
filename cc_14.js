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
