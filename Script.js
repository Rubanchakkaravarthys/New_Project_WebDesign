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

// Address
document.getElementById('addAddress').addEventListener('click',function(){
    let addressCount=3;
    addressCount++;
    const addressContainer = document.getElementById('addressContainer');
    const newAddressSection = document.createElement('div');
    newAddressSection.className='col address-section';
    newAddressSection.innerHTML=
    `
     <h5 class="text-white"><span><input type="checkbox"></span> Address ${addressCount}</h5>
                <input type="text" placeholder="Platform"><br>
                <input type="text" placeholder="Address" ><br>
                <input type="text" placeholder="Pincode"><br>
    `;
    addressContainer.appendChild(newAddressSection);
})

