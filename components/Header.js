import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Header() {
    const router = useRouter();

    return (
        <div className={router.pathname === '/' ? 'header' : 'post-header'}>
            <Link passHref href='/'>
                <div role='button' className={router.pathname === '/' ? 'sparkle' : 'sparkle sparkle-reverse'}>
                    <h1>Thoughts Into Words</h1>
                </div>
            </Link>
            <a target='_blank' rel="noopener noreferrer" href="https://github.com/nosyminotaur/blog" style={{ marginLeft: 'auto' }}>
                <img style={{ width: '2em', height: '2em' }} src="/images/github.png" alt="Github" />
            </a>
        </div>
    )
}
