import { NextResponse } from 'next/server';

export async function GET() {
  const benefits = [
    {
      id: '1',
      title: 'Sadə və Ölçətən',
      description: 'Xidmətlərimizi asan və istifadəçi dostu edərək, müştəri tələblərinə uyğun daim təkmilləşdiririk',
    },
    {
      id: '2',
      title: 'Sadə və Ölçətən',
      description: 'Xidmətlərimizi asan və istifadəçi dostu edərək, müştəri tələblərinə uyğun daim təkmilləşdiririk',
    },
    {
      id: '3',
      title: 'Sadə və Ölçətən',
      description: 'Xidmətlərimizi asan və istifadəçi dostu edərək, müştəri tələblərinə uyğun daim təkmilləşdiririk',
    },
  ];

  return NextResponse.json(benefits);
}
