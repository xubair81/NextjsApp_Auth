"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

const CallbackPage = () => {
  const router = useRouter();


useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const idToken = hashParams.get("id_token");

    if (idToken) {
      setCookie('id_token', idToken, { maxAge: 60 * 60 * 24 });

      // Make an API request to set server-only cookie
      fetch('/api/set-cookie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_token: idToken }),
        credentials: 'include', // Include this option
      });
      router.push('/dashboard');
    } else {
        console.error("id_token not found in callback URL");
      }

    // ... (remaining code)
  }, [router]);

  return <div>Handling callback...</div>;
};

export default CallbackPage;