import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
          contact
        </h1>
        
        <Card className="p-6">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                name
              </label>
              <Input id="name" required />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                email
              </label>
              <Input id="email" type="email" required />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                message
              </label>
              <Textarea id="message" required className="min-h-[150px]" />
            </div>
            
            <Button type="submit" className="w-full">
              send message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}

