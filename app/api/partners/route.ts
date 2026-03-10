import { NextResponse } from 'next/server';

export async function GET() {
  const partners = [
    {
      id: '1',
      name: 'AZPULMAT',
      logo: '/logos/azpulmat.svg',
    },
    {
      id: '2',
      name: 'KredAgro',
      logo: '/logos/kredagro.svg',
    },
    {
      id: '3',
      name: 'Unibank',
      logo: '/logos/unibank.svg',
    },
    {
      id: '4',
      name: 'azParking',
      logo: '/logos/azparking.svg',
    },
  ];

  return NextResponse.json(partners);
}
