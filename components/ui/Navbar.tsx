import NextLink from 'next/link';
import { Spacer, Text, useTheme, Link } from '@nextui-org/react';
import Image from 'next/image';

export function Navbar() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0.5rem 1rem',
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okeApi
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <Link>
          <Text>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
}
