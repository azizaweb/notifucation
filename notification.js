export function showNotification(type, message){
    const notification = document.createElement('div');
    notification.innerHTML = `
    <span>${message}</span>
    <button class='close-btn'>&times;</button>
    `;

    notification.style.position = 'fixed';
    notification.style.right = '20px';
    notification.style.top = `${document.querySelectorAll('.notification').length * 60 + 20}px`;
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '10px';
    notification.style.color = 'white';
    notification.style.display = 'flex';
    notification.style.alignItems = 'center';
    notification.style.justifyContent = 'center';
    notification.style.minWidth = '250px';
    notification.style.fontSize = '16px';
    notification.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
    notification.style.transition = 'opacity 0.3s ease-in-out';

    if (type === 'success'){
        notification.style.backgroundColor = '#4CAF50';
    } else if (type === 'fall'){
        notification.style.backgroundColor = '#F44336';
    } else if (type === 'warning'){
        notification.style.backgroundColor = '#FF9800';
    }

    document.body.appendChild(notification);
    notification.querySelector('.close-btn').addEventListener('click', () => {
        setTimeout(() => notification.remove(), 300);
    });

    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Подключение обработчиков событий
document.getElementById('success-btn').addEventListener('click', () => {
    showNotification('success', 'Well done!');
});

document.getElementById('fall-btn').addEventListener('click', () => {
    showNotification('fall', 'Something went wrong!');
});

document.getElementById('warning-btn').addEventListener('click', () => {
    showNotification('warning', 'Please be careful!');
});