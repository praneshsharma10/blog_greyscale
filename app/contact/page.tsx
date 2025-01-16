// shadcn ui
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

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

        <div>
              <label htmlFor="email" className="">
                email
              </label>
              <Input id="email" type="email" required />
        </div>

        <div>
              <label htmlFor="message" className="">
                message
              </label>
              <Textarea id="message" required className="" />
        </div>
        <Button type="submit" className="">
              send message
        </Button>
        </Card>
        
        
      </div>
    </div>
  )
}

