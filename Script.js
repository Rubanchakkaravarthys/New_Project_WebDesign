window.onload = function() {
document.getElementById('submitBtn').addEventListener('click', function() {
var messageDiv = document.getElementById('message');
messageDiv.style.display = 'block';
            });
        }
document.getElementById('cancelBtn').addEventListener('click', function() {
                var messageDiv = document.getElementById('message');
                messageDiv.style.display = 'none'; 
            });



