
const showFormBtn = document.querySelector('.showForm');
const showCarDataBtn = document.querySelector('.showCarData');
const showPersonDataBtn = document.querySelector('.showPersonData');
const insuranceCompanyForm = document.querySelector('.insuranceCompanyData');
const carDataForm = document.querySelector('.carData');
const personDataForm = document.querySelector('.personData');
const generatePDFBtn = document.querySelector('.sendForm');



const notice = {
    insuranceCompanyData:'',
    carData:'',
    personData:'',
}

const insuranceCompany = {
    company: '',
    endDate: '',
    insuranceNumber: '',
    reason:'',
    selectAll(){
        let companySelect = insuranceCompanyForm.querySelector('#insuranceCompany');        
            companySelect.addEventListener('input', (e)=>{
                this.company = e.target.value; 
             });
        let insuranceEndDate = insuranceCompanyForm.querySelector('#insuranceEndDate');
        this.endDate = insuranceEndDate.value;
        let insuranceNumber = insuranceCompanyForm.querySelector('#insuranceNumber');
        this.insuranceNumber = insuranceNumber.value;
        let reasonSelect = insuranceCompanyForm.querySelector('#insuranceNoticeReason');        
            reasonSelect.addEventListener('input', (e)=>{
                this.reason = e.target.value; 
             });
    }
}

const car = {
    type: '',
    productionYear : '',
    brand: '',
    model: '',
    plate: '',
    selectAll(){
        let typeSelect = carDataForm.querySelector('#carTypeOption');        
            typeSelect.addEventListener('input', (e)=>{
                this.type = e.target.value; 
             });
        let productionYear = carDataForm.querySelector('#carProductionYear');
        this.productionYear = productionYear.value;
        let brand = carDataForm.querySelector('#carBrand');
        this.brand = brand.value;
        let model = carDataForm.querySelector('#carModel');
        this.model = model.value;
        let plate = carDataForm.querySelector('#carPlateNumber');
        this.plate = plate.value;
    }
}

const person = {
    firstName : '',
    lastName : '',
    street : '',
    homeNo : '',
    postcode: '',
    city : '',
    phone: '',
    selectAll(){
        let firstName = personDataForm.querySelector('#personName');
        this.firstName = firstName.value;
        let lastName = personDataForm.querySelector('#personLastname');
        this.lastName = lastName.value;
        let street = personDataForm.querySelector('#personStreet');
        this.street = street.value;
        let homeNo = personDataForm.querySelector('#personHomeNo');
        this.homeNo = homeNo.value;
        let postcode = personDataForm.querySelector('#personPostcode');
        this.postcode = postcode.value;
        let city = personDataForm.querySelector('#personCity');
        this.city = city.value;
        let phone = personDataForm.querySelector('#personPhone');
        this.phone = phone.value;
    }
}

function fillNotice(){
    notice.insuranceCompanyData = insuranceCompany;
    notice.carData = car;
    notice.personData = person;
}


insuranceCompany.selectAll();
car.selectAll();
person.selectAll();



showCarDataBtn.addEventListener('click',()=>{
        insuranceCompany.selectAll();
        //notice.insuranceCompanyData = insuranceCompany;  
        insuranceCompanyForm.classList.remove('visible');
        carDataForm.classList.add('visible');
        })
    



showFormBtn.addEventListener('click',()=>{
    showFormBtn.style.display = 'none';
    insuranceCompanyForm.classList.add('visible');
})



showPersonDataBtn.addEventListener('click',()=>{
   car.selectAll();
   carDataForm.classList.remove('visible');
   personDataForm.classList.add('visible');
})





generatePDFBtn.addEventListener('click',()=>{
   person.selectAll();
   fillNotice();
   //test2.textContent = insuranceCompany.company;
   console.log(notice);
   let test = document.getElementById('window').contentWindow;
   test.focus();
   test.print();
})



