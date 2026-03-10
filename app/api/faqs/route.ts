import { NextResponse } from 'next/server';

export async function GET() {
  const faqs = [
    {
      id: '1',
      question: 'Geenpay nədir?',
      answer: '',
    },
    {
      id: '2',
      question: 'GreenPay hansı ödəniş üsullarını dəstəkləyir?',
      answer: '',
    },
    {
      id: '3',
      question: 'Greenpay-dən kim istifadə edə bilər?',
      answer: 'Greenpay istənilən ölçüdə olan bizneslər üçün nəzərdə tutulub — startaplardan tutmuş iri müəssisələrədək, müxtəlif sənaye sahələrində.',
    },
    {
      id: '4',
      question: 'Greenpay nədir?',
      answer: '',
    },
    {
      id: '5',
      question: 'Greenpay nədir?',
      answer: '',
    },
  ];

  return NextResponse.json(faqs);
}
