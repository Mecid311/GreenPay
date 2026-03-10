import { NextResponse } from 'next/server';

export async function GET() {
  const services = [
    {
      id: '1',
      number: '01',
      title: 'Internet - Acquiring / E-Comm Solution',
      description: 'Link payment xidməti sayəsində istifadəçilər sadəcə bir link vasitəsilə məhsul və ya xidmət üçün ödəniş edə bilərlər.',
    },
    {
      id: '2',
      number: '02',
      title: 'All-In-One Aggregator Service',
      description: 'Link payment xidməti sayəsində istifadəçilər sadəcə bir link vasitəsilə məhsul və ya xidmət üçün ödəniş edə bilərlər. Link payment xidməti sayəsində istifadəçilər sadəcə bir link vasitəsilə və ya xidmət üçün ödəniş edə bilərlər.',
    },
    {
      id: '3',
      number: '03',
      title: 'Link Payment +',
      description: 'Link payment xidməti sayəsində istifadəçilər sadəcə bir link vasitəsilə məhsul və ya xidmət üçün ödəniş edə bilərlər.',
    },
  ];

  return NextResponse.json(services);
}
