'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IMaskInput } from 'react-imask';

import { FeedbackFormData } from '@/types/feedback';

import styles from './feedback-form.module.css';

export const FeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FeedbackFormData>();

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('Не удалось отправить форму. Попробуйте снова.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor='name' className={styles.label}>
            Имя
          </label>
          <input
            id='name'
            type='text'
            placeholder='Ваше имя'
            className={styles.input}
            {...register('name', {
              required: 'Имя обязательно для заполнения',
            })}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor='phone' className={styles.label}>
            Телефон
          </label>
          <Controller
            name='phone'
            control={control}
            rules={{
              required: 'Телефон обязателен для заполнения',
              pattern: {
                value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                message: 'Неверный формат телефона',
              },
            }}
            render={({ field }) => (
              <IMaskInput
                {...field}
                mask='+7 (000) 000-00-00'
                placeholder='Ваш номер'
                className={styles.input}
                onAccept={(value) => field.onChange(value)}
              />
            )}
          />
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor='email' className={styles.label}>
            Почта
          </label>
          <input
            id='email'
            type='email'
            placeholder='E-mail'
            className={styles.input}
            {...register('email', {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Неверный формат email',
              },
            })}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor='message' className={styles.label}>
            Комментарий
          </label>
          <input
            id='message'
            placeholder='Сообщение'
            className={styles.input}
            {...register('message')}
          />
        </div>
      </div>

      <div className={styles.footer}>
        <button type='submit' className={styles.submit} disabled={isSubmitting}>
          {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
        </button>

        <div className={styles.consent}>
          <input
            id='consent'
            type='checkbox'
            className={styles.checkbox}
            {...register('consent', {
              required: 'Необходимо согласие на обработку данных',
            })}
          />
          <label htmlFor='consent' className={styles['consent-label']}>
            Заполняя и отправляя данную форму я соглашаюсь на обработку
            персональных данных в соответствии с политикой конфиденциальности
            сервиса
          </label>

          {errors.consent && (
            <span className={styles.error}>{errors.consent.message}</span>
          )}
        </div>
      </div>
    </form>
  );
};
