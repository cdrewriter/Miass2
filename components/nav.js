import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box } from '@material-ui/core';

export default function Nav() {
  const router = useRouter();

  return (
    <Box>
      <Link href="/">
        <a>Главная</a>
      </Link>
      <Link href="/catalog">
        <a>Запасные части</a>
      </Link>
      <Link href="/cars">
        <a>Техника</a>
      </Link>
      <Link href="/service">
        <a>Сервис</a>
      </Link>
      <Link href="/about">
        <a>Контакты</a>
      </Link>
    </Box>
  );
}
