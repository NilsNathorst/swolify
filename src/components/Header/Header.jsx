import { useCurrentDay } from '../../hooks'
export const Header = () => {
    const { dayOfWeek } = useCurrentDay()
    return <h1>{dayOfWeek}</h1>
}
