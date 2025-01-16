// shadcn ui
 import { Card } from '@/components/ui/card'
 import { Input } from '@/components/ui/input'

export default function ContactPage() {
  return (
    <div className="">
      <div className="">
        <h1 className="">
          contact
        </h1>
        <Card className=''>
        <div>
            <label htmlFor="name" className="">
                name
            </label>
            <Input id="name" required />
        </div>

        </Card>
        
        
      </div>
    </div>
  )
}

