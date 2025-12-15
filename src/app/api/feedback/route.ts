import { NextResponse } from 'next/server';

import {
  FEEDBACK_ERROR_MESSAGE,
  FEEDBACK_FAILURE_RATE,
  FEEDBACK_SIMULATED_DELAY_MS,
  FEEDBACK_SUCCESS_MESSAGE,
  FEEDBACK_UNEXPECTED_ERROR,
  FEEDBACK_VALIDATION_MESSAGE,
} from '@/constants/feedback';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: FEEDBACK_VALIDATION_MESSAGE },
        { status: 400 },
      );
    }

    await new Promise((resolve) =>
      setTimeout(resolve, FEEDBACK_SIMULATED_DELAY_MS),
    );

    const isSuccess = Math.random() > FEEDBACK_FAILURE_RATE;

    if (isSuccess) {
      console.log('Feedback received:', { name, phone, email, message });
      return NextResponse.json({
        success: true,
        message: FEEDBACK_SUCCESS_MESSAGE,
      });
    } else {
      return NextResponse.json(
        { success: false, message: FEEDBACK_ERROR_MESSAGE },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error('Feedback API error:', error);
    return NextResponse.json(
      { success: false, message: FEEDBACK_UNEXPECTED_ERROR },
      { status: 500 },
    );
  }
}
