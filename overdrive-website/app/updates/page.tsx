/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## UpdatesPage - Component for displaying the latest OverDrive updates.
 ##
 */

export default function Updates() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 sm:px-6 md:px-0">
            <h1 className="text-center !text-[1.45rem] sm:!text-[1.7rem] md:!text-[2rem] !tracking-[0.28em] sm:!tracking-[0.34em] md:!tracking-[0.4em]" style={{ fontSize: '2rem', letterSpacing: '0.4em' }}>
                UPDATES
            </h1>
            <span className="small-text !text-[0.58rem] sm:!text-[0.65rem] md:!text-[0.7rem] !tracking-[0.22em] sm:!tracking-[0.3em] md:!tracking-[0.4em]" style={{ color: 'var(--color-gold)', fontSize: '0.7rem', letterSpacing: '0.4em' }}>
                LATEST
            </span>
        </main>
    )
}
