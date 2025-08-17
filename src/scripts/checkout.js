function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + 'Error');
    
    field.style.borderColor = 'red';
    error.textContent = message;
    error.style.display = 'block';
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + 'Error');
    
    field.style.borderColor = '#ddd';
    error.style.display = 'none';
}

function validateEmail(email) {
    return email.includes('@') && email.includes('.');
}

function validateForm(event) {
    event.preventDefault();
    
    let isValid = true;
    
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.style.display = 'none');
    
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.style.borderColor = '#ddd');
    
    const firstName = document.getElementById('firstName').value.trim();
    if (!firstName) {
        showError('firstName', 'Nome é obrigatório');
        isValid = false;
    }
    
    const lastName = document.getElementById('lastName').value.trim();
    if (!lastName) {
        showError('lastName', 'Sobrenome é obrigatório');
        isValid = false;
    }
    
    const email = document.getElementById('email').value.trim();
    if (!email) {
        showError('email', 'Email é obrigatório');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'Email inválido');
        isValid = false;
    }
    
    const password = document.getElementById('password').value.trim();
    if (!password) {
        showError('password', 'Senha é obrigatória');
        isValid = false;
    }
    
    const address = document.getElementById('address').value.trim();
    if (!address) {
        showError('address', 'Endereço é obrigatório');
        isValid = false;
    }
    
    const phone = document.getElementById('phone').value.trim();
    if (!phone) {
        showError('phone', 'Telefone é obrigatório');
        isValid = false;
    }
    
    if (isValid) {
        alert('Formulário válido! Pedido processado com sucesso!');
          
        console.log('Dados do formulário:', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            address: address,
            phone: phone
        });
        
        document.getElementById('checkoutForm').reset();
    }
    
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const fields = ['firstName', 'lastName', 'email', 'password', 'address', 'phone'];
    
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        field.addEventListener('input', function() {
            clearError(fieldId);
        });
        
        field.addEventListener('blur', function() {
            const value = this.value.trim();
            if (!value) {
                showError(fieldId, 'Campo obrigatório');
            }
        });
    });
});
