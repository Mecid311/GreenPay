import { NextResponse } from 'next/server';

export async function GET() {
  const certificates = [
    {
      id: '1',
      name: 'Mərkəzi Bank',
      icon: '🏦',
    },
    {
      id: '2',
      name: 'PCI DSS',
      icon: '🔒',
    },
    {
      id: '3',
      name: 'VISA',
      icon: '💳',
    },
    {
      id: '4',
      name: 'PCI DSS',
      icon: '🔒',
    },
    {
      id: '5',
      name: 'PCI DSS',
      icon: '🔒',
    },
    {
      id: '6',
      name: 'PCI DSS',
      icon: '🔒',
    },
  ];

  return NextResponse.json(certificates);
}
