import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Данные пользователя:', data);
        alert('Регистрация прошла успешно!');
    };

    const password = watch('password');

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
            <div>
                <label>Имя:</label>
                <input
                    type="text"
                    {...register('name', { required: 'Имя обязательно' })}
                />
                {errors.name && <p style={styles.error}>{errors.name.message}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    {...register('email', {
                        required: 'Email обязателен',
                        pattern: {
                            value: /^[\w.-]{2,}@[\w.-]+\.\w{2,}$/,
                            message: 'Некорректный email',
                        },
                    })}
                />
                {errors.email && <p style={styles.error}>{errors.email.message}</p>}
            </div>

            <div>
                <label>Пароль:</label>
                <input
                    type="password"
                    {...register('password', {
                        required: 'Пароль обязателен',
                        minLength: {
                            value: 6,
                            message: 'Пароль должен быть не короче 6 символов',
                        },
                    })}
                />
                {errors.password && (
                    <p style={styles.error}>{errors.password.message}</p>
                )}
            </div>

            <div>
                <label>Подтверждение пароля:</label>
                <input
                    type="password"
                    {...register('confirmPassword', {
                        required: 'Подтверждение пароля обязательно',
                        validate: (value) =>
                            value === password || 'Пароли не совпадают',
                    })}
                />
                {errors.confirmPassword && (
                    <p style={styles.error}>{errors.confirmPassword.message}</p>
                )}
            </div>

            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

const styles = {
    form: {
        maxWidth: '400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    error: {
        color: 'red',
        fontSize: '0.9em',
    },
};

export default RegistrationForm