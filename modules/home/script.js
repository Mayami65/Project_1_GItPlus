// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarBtn = document.getElementById('toggleSidebar');
  
    // Toggle sidebar visibility
    // toggleSidebarBtn.addEventListener('click', () => {
    //   sidebar.classList.toggle('collapsed');
    // });
  
    // Optional: Dynamic updates (simulate new data)
    const revenueWidget = document.getElementById('revenueWidget');
    const usersWidget = document.getElementById('usersWidget');
    const messagesWidget = document.getElementById('messagesWidget');
  
    setTimeout(() => {
      revenueWidget.querySelector('p').textContent = '$7,500';
      usersWidget.querySelector('p').textContent = '250';
      messagesWidget.querySelector('p').textContent = '70';
    }, 3000);
  });
  

  // script.js

// Dummy data for charts
const revenueData = [1200, 1500, 1700, 1900, 2100, 2500, 3000, 3200, 3800, 5000];
const userData = [50, 60, 75, 80, 120, 140, 160, 200, 220, 250];

// Generate Revenue Chart
const revenueChartCtx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(revenueChartCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [{
      label: 'Revenue ($)',
      data: revenueData,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Generate User Engagement Chart
const userChartCtx = document.getElementById('userChart').getContext('2d');
const userChart = new Chart(userChartCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [{
      label: 'New Users',
      data: userData,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
