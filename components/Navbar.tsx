import { NavigationMenu } from '@radix-ui/react-navigation-menu'
import Image from 'next/image'
import React from 'react'
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import { BadgeDollarSign, BoxIcon, Calendar} from 'lucide-react'
import Link from 'next/link'
import { discoverPages } from '@/app/utils/pageDiscovery'

const Navbar = () => {
    const calendarPages = discoverPages('calendar')
    const user = {
        name: 'eslam hegazy',
        userrname:'malse',
        role:'doctor'
    } // Replace with actual user authentication logic
    return(
        <>
    <NavigationMenu className='bg-primary uppercase bg-fixed '>
        <NavigationMenuList>
            <NavigationMenuLink >
        <Link  href='/'>
            <Image  src={''} width={20} height={20} alt='logo' />
        </Link>
        </NavigationMenuLink>
{user ? (
    <>
    <NavigationMenuItem >
        <NavigationMenuTrigger className='hover:bg-bg-alt uppercase'><Calendar/>Calendar</NavigationMenuTrigger>
    <NavigationMenuContent className='bg-bg-alt translate-y-10 rounded-2xl'>
            {calendarPages?.map((page)=> (
                <NavigationMenuLink className='text-bg bg-bg-alt hover:bg-bg hover:text-bg-alt transform' key={page.href} href={page.href}>
                    {page.title}
                </NavigationMenuLink>
            ))}
    </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
        <NavigationMenuLink href='/storage' >
        <h3><BoxIcon className='inline'/>Storage</h3>
        </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
        <NavigationMenuLink href='/earnings'>
            <h3><BadgeDollarSign className='inline'/> earnings</h3> 
        </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
        
    </NavigationMenuItem>
    </>
    ) : (<div>signin</div>)}
</NavigationMenuList>
</NavigationMenu>
</>)
}

export default Navbar