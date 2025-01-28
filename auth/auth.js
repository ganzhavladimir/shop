// Подключение Supabase
import { supabase } from '../config/supabase.js';

// Регистрация через Google
async function registerWithGoogle() {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
    });
    if (error) {
        console.error("Ошибка при регистрации:", error.message);
    } else {
        console.log("Пользователь зарегистрирован:", user);
        // Установка роли "Покупатель" по умолчанию
        await supabase.from('users').insert([{ id: user.id, role: 'buyer' }]);
        redirectToDashboard(user.role);
    }
}

// Вход по почте и паролю
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) {
        console.error("Ошибка при входе:", error.message);
    } else {
        console.log("Пользователь вошел:", user);
        const { data: userData } = await supabase.from('users').select('role').eq('id', user.id).single();
        redirectToDashboard(userData.role);
    }
});

// Перенаправление в зависимости от роли
function redirectToDashboard(role) {
    switch(role) {
        case 'buyer':
            window.location.href = '../dashboard/buyer.html';
            break;
        case 'seller':
            window.location.href = '../dashboard/seller.html';
            break;
        case 'admin':
            window.location.href = '../dashboard/admin.html';
            break;
        default:
            console.error("Неизвестная роль пользователя");
    }
}