function showError(fieldId, message) {
    document.getElementById(fieldId).style.borderColor = 'red';
    document.getElementById(fieldId + 'Error').textContent = message;
    document.getElementById(fieldId + 'Error').style.display = 'block';
}

function clearError(fieldId) {
    document.getElementById(fieldId).style.borderColor = '#ddd';
    document.getElementById(fieldId + 'Error').style.display = 'none';
}

function validateForm(event) {
    event.preventDefault();
    
    document.querySelectorAll('.checkout-error').forEach(e => e.style.display = 'none');
    document.querySelectorAll('input').forEach(i => i.style.borderColor = '#ddd');
    
    let isValid = true;
    
    const fields = [
        { id: 'firstName', name: 'Nome', validator: (v) => /^[A-Za-zÀ-ÿ\s]+$/.test(v) },
        { id: 'lastName', name: 'Sobrenome', validator: (v) => /^[A-Za-zÀ-ÿ\s]+$/.test(v) },
        { id: 'email', name: 'Email', validator: (v) => v.includes('@') && v.includes('.') },
        { id: 'password', name: 'Senha', validator: (v) => /[A-Za-z]/.test(v) && /\d/.test(v) },
        { id: 'address', name: 'Endereço', validator: () => true },
        { id: 'phone', name: 'Telefone', validator: (v) => /^\d+$/.test(v) }
    ];
    
    fields.forEach(field => {
        const value = document.getElementById(field.id).value.trim();
        
        if (!value) {
            showError(field.id, `${field.name} é obrigatório`);
            isValid = false;
        } else if (value.length < 3) {
            showError(field.id, `${field.name} deve ter pelo menos 3 caracteres`);
            isValid = false;
        } else if (!field.validator(value)) {
            const messages = {
                'firstName': 'Nome deve conter apenas letras',
                'lastName': 'Sobrenome deve conter apenas letras',
                'email': 'Formato de email inválido',
                'password': 'Senha deve conter letras e números',
                'phone': 'Telefone deve conter apenas números'
            };
            showError(field.id, messages[field.id] || 'Formato inválido');
            isValid = false;
        }
    });
    
    if (isValid) {
        alert('✅ Formulário válido! Pedido processado com sucesso!');
        document.getElementById('checkoutForm').reset();
    }
    
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        // Ao digitar
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                clearError(this.id);
            }
        });
        
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                showError(this.id, 'Campo obrigatório');
            }
        });
    });
});
