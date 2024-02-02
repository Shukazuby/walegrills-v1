try{

    document.addEventListener('DOMContentLoaded', function () {
        const burgerButton = document.getElementById('burger');
        const menu = document.getElementById('menu');
    
        burgerButton.addEventListener('click', function () {
            menu.classList.toggle('hidden');
        });
    });
    

    function subCal(){
        let itemTotal = document.getElementById('total')
        // let adminTotal = document.getElementById('admintotal')

    }
    function clientData(){

        let clientInfo =document.getElementById('ClientInfo')
        let clientName =document.getElementById('ClientName').value
        let clientEvent =document.getElementById('ClientEvent').value
        let clientGuest =document.getElementById('ClientGuest').value
        let eventDate =document.getElementById('EventDate').value
        let eventVenue =document.getElementById('EventVenue').value
        let clientEmail =document.getElementById('ClientEmail').value

        let eventInfo = `
        <h2 class="text-lg font-semibold mb-2">Event Info</h2>
        <p class="ml-10 text-[15px]"><strong class="font-semibold">Client Name:</strong> ${clientName}</P>
        <p class="ml-10 text-[15px]"><strong class="font-semibold">Event Type:</strong> ${clientEvent} </P>
        <p class="ml-10 text-[15px]" ><strong class="font-semibold">Guest Size:</strong> ${clientGuest}  guests</P>
        <p class="ml-10 text-[15px]"><strong class="font-semibold">Event Date:</strong> ${eventDate}</P>
        <p class="ml-10 text-[15px]"><strong class="font-semibold">Event Venue:</strong> ${eventVenue}</P>
        <p class="ml-10 text-[15px]"><strong class="font-semibold">Client Email:</strong> ${clientEmail}</P>
        `
        clientInfo.innerHTML = eventInfo;
        // dayAvailability()

    }

    function adminFees() {
    const clientGuest = document.getElementById('ClientGuest').value;
    const adminCal = document.getElementById('admin');
    // const adminTotal = document.getElementById('admintotal')


    let serviceCharge = '';
    let staffing = '';
    let staffNumber = '';
    let transportation = '';
    let equipment = '';

    if (clientGuest >= 1 && clientGuest <= 49) {
            serviceCharge = 250;
            staffing = 140;
            staffNumber = '1-2';
            transportation = 130;
            equipment = 50;
        } 
        else if (clientGuest >= 50 && clientGuest <= 99) {
            serviceCharge = 300;
            staffing = 210;
            staffNumber = '1-3';
            transportation = 130;
            equipment = 90;
        }
        else if (clientGuest >= 100 && clientGuest <= 199) {
            serviceCharge = 350;
            staffing = 340;
            staffNumber = '3-5';
            transportation = 150;
            equipment = 130;
        }
        else if (clientGuest >= 200 && clientGuest <= 299) {
            serviceCharge = 400;
            staffing = 400;
            staffNumber = '5-8';
            transportation = 200;
            equipment = 170;
        }
        else if (clientGuest >= 300 && clientGuest <= 499) {
            serviceCharge = 600;
            staffing = 560;
            staffNumber = '6-10';
            transportation = 240;
            equipment = 200;
        } 
        else{
            alert(`${clientGuest} guests is a lot. Let's have a direct chat to discuss how we can make your guests happy `)
        }

        adminCal.innerHTML = '';

    const adminCharge = `
        <h2 class="text-lg font-semibold mb-2">Admin Fees</h2>
        <p class="ml-10 text-[15px]"><strong class="font-semibold">Service Charge:</strong> £${serviceCharge}</p>
        <p class="ml-10 text-[15px]"><strong class="font-semibold">Staffing:</strong> £${staffing}</p>
        <p class="ml-10 text-[15px]"><strong class="font-semibold">Staff size:</strong> ${staffNumber}</p>
        <p class="ml-10 text-[15px]"><strong class="font-semibold">Transportation:</strong> £${transportation}</p>
        <p class="ml-10 text-[15px]"><strong class="font-semibold">Equipment:</strong> £${equipment}</p>
    `;
    // const totalAdFees= serviceCharge + staffing + transportation + equipment;


    adminCal.innerHTML = adminCharge;

    // adminTotal.innerHTML = totalAdFees;
    //  dayAvailability()
    }

    // function dayAvailability(){
    //     setDate()
    //     getDate()
    //     day = ''

    //     if(setDate == getDate){
    //         let day = 'is unavailable'
    //     } else{
    //         let day = 'is available'
    //     }
    // }


    // function setDate(){
    //     let eventDate = document.getElementById('EventDate').value
    //    localStorage.setItem('Event Date', eventDate)        
    // }

    // function getDate(){
    //     let eventDate = document.getElementById('EventDate').value
    //    localStorage.getItem(eventDate)        
    // }

    
    const addToCartCheckboxes = document.querySelectorAll('.add-to-cart');
        const quantityInputs = document.querySelectorAll('.quantity');
        const cart = [];
        
        addToCartCheckboxes.forEach((checkbox, index) => {
            checkbox.addEventListener('change', function() {
                const item = {
                    name: checkbox.dataset.name,
                    price: parseFloat(checkbox.dataset.price),
                    image: checkbox.dataset.image,
                    quantity: parseInt(quantityInputs[index].value),
                };
        
                if (checkbox.checked && item.quantity > 0) {
                    const existingItemIndex = cart.findIndex(i => i.name === item.name);
                    if (existingItemIndex !== -1) {
                        cart[existingItemIndex].quantity += item.quantity;
                    } else {
                        cart.push(item);
                    }
                } else {
                    const existingItemIndex = cart.findIndex(i => i.name === item.name);
                    if (existingItemIndex !== -1) {
                        cart.splice(existingItemIndex, 1);
                    }
                }
        
                updateCartPreview();
            });
        
            quantityInputs[index].addEventListener('input', function() {
                const item = {
                    name: checkbox.dataset.name,
                    price: parseFloat(checkbox.dataset.price),
                    image: checkbox.dataset.image,
                    quantity: parseInt(quantityInputs[index].value),
                };
        
                if (checkbox.checked && item.quantity > 0) {
                    const existingItemIndex = cart.findIndex(i => i.name === item.name);
                    if (existingItemIndex !== -1) {
                        cart[existingItemIndex].quantity = item.quantity;
                    } else {
                        cart.push(item);
                    }
                } else {
                    const existingItemIndex = cart.findIndex(i => i.name === item.name);
                    if (existingItemIndex !== -1) {
                        cart.splice(existingItemIndex, 1);
                    }
                }
        
                updateCartPreview();
            });
        });
        
        function updateCartPreview() {
            const cartList = document.getElementById('cart');
            const totalSpan = document.getElementById('total');
            let total = 0;
        
            cartList.innerHTML = '';
        
            cart.forEach(item => {
                const li = document.createElement('li');
                const img = document.createElement('img');
                img.src = item.image;
                img.alt = item.name;
                li.appendChild(img);
        
                li.textContent += ` ${item.name} (Quantity: ${item.quantity}) - £${(item.price * item.quantity).toFixed(2)}`;
                cartList.appendChild(li);
                total += item.price * item.quantity;
            });
        
            totalSpan.textContent = total.toFixed(2);
        }
}

    catch(error){
        errorHandler(error)
    }

    function errorHandler(error){
        if(error instanceof ReferenceError){
            alert('oops there is an error, but it seems its our fault. Check back soon')
        }
        else if(error instanceof SyntaxError){
            alert('oops there is an error, but it seems its our fault. Check back soon')
        }
        else if(error instanceof Type){
            alert('Invalid Input, try again')
        }else if(error instanceof URIError){
            alert('oops there is an error, but it seems its our fault. Check back soon')
        }else if(error instanceof SyntaxError){
            alert('oops there is an error, but it seems its our fault. Check back soon')
        }
        else if(error instanceof EvalError){
            alert('oops there is an error, but it seems its our fault. Check back soon')
        }
        else if(error instanceof RangeError){
            alert('oops there is an error, you are not within the range. Try again')
        } else{
            console.log('Working well')
        }
        }
