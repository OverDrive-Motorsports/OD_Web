/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## HomePage - Main component for the OverDrive website landing page.
 ##
 */

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-6">
            <p className="small-text" style={{ color: 'var(--color-gold)', fontSize: '0.7rem', letterSpacing: '0.3em' }}>
                MOTORSPORT REIMAGINED
            </p>
            <h1 style={{ fontSize: '3rem', letterSpacing: '0.4em' }}>
                O V E R D R I V E
            </h1>
            <p className="small-text" style={{fontSize: '0.7rem', letterSpacing: '0.4em' }}>
                VER +1.234
            </p>
        </main>
    )
}
