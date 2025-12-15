import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: 'Имя и телефон обязательны для заполнения' },
        { status: 400 },
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const isSuccess = Math.random() > 0.1;

    if (isSuccess) {
      console.log('Feedback received:', { name, phone, email, message });

      return NextResponse.json({
        success: true,
        message: 'Форма отправлена! Мы свяжемся с вами в ближайшее время.',
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'Не удалось отправить форму. Попробуйте снова.',
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error('Feedback API error:', error);
    return NextResponse.json(
      { success: false, message: 'Произошла ошибка при отправке формы' },
      { status: 500 },
    );
  }
}
