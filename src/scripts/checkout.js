function showError(fieldId, message) {
    document.getElementById(fieldId).classList.add('error');
    document.getElementById(fieldId + 'Error').textContent = message;
    document.getElementById(fieldId + 'Error').classList.add('active');
}

function clearError(fieldId) {
    document.getElementById(fieldId).classList.remove('error');
    document.getElementById(fieldId + 'Error').classList.remove('active');
}

function clearAllErrors() {
    document.querySelectorAll('input').forEach(input => input.classList.remove('error'));
    document.querySelectorAll('.checkout-error').forEach(error => error.classList.remove('active'));
}

function validateForm(event) {
    event.preventDefault();
    
    clearAllErrors();
    let isValid = true;
    
    const fields = [
        { id: 'firstName', name: 'First Name', validator: (v) => /^[A-Za-zÀ-ÿ\s]+$/, errorMsg: 'First name must contain only letters' },
        { id: 'lastName', name: 'Last Name', validator: (v) => /^[A-Za-zÀ-ÿ\s]+$/, errorMsg: 'Last name must contain only letters' },
        { id: 'email', name: 'Email', validator: (v) => v.includes('@') && v.includes('.'), errorMsg: 'Invalid email format' },
        { id: 'password', name: 'Password', validator: (v) => /[A-Za-z]/.test(v) && /\d/.test(v), errorMsg: 'Password must contain letters and numbers' },
        { id: 'address', name: 'Address', validator: () => true, errorMsg: '' },
        { id: 'phone', name: 'Phone', validator: (v) => /^\d+$/.test(v), errorMsg: 'Phone must contain only numbers' }
    ];
    
    fields.forEach(field => {
        const value = document.getElementById(field.id).value.trim();
        
        if (!value) {
            showError(field.id, `${field.name} it is mandatory`);
            isValid = false;
        } else if (value.length < 3) {
            showError(field.id, `${field.name} must have at least 3 characters`);
            isValid = false;
        } else if (!field.validator(value)) {
            showError(field.id, field.errorMsg);
            isValid = false;
        }
    });
    
    if (isValid) {
        alert('Valid form! Request processed successfully!');
        document.getElementById('checkoutForm').reset();
    }
    
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                clearError(this.id);
            }
        });
        
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                showError(this.id, 'Field is mandatory');
            }
        });
    });
    
    const form = document.getElementById('checkoutForm');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
});

window.validateForm = validateForm;
