// import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={`
            fixed
            bottom-0
            h-10
            w-full
            text-white
            bg-stone-900
            flex justify-center items-center
        `}>
            <div>&copy; EasyLegal.app 2023</div>
        </footer>
    )
}