import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'


const resources = [
    {
        category: 'Official Documentation',
        items: [
          {
            title: 'AWS Documentation',
            description: 'Complete guide to Amazon Web Services',
            url: 'https://docs.aws.amazon.com',
          },
        ],
      }
    ]


    export default function ToolsPage() {
        return (
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
              tools & resources
            </h1>
            
            <div className="space-y-12">
              {resources.map((section) => (

                <div key={section.category}>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    {section.category}
                  </h2>

                  <div className="grid gap-6 md:grid-cols-2">
                    {section.items.map((item) => (
                        <Card key={item.title} className="p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                            <Button variant="outline" asChild>
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                                    visit resource
                                <ExternalLink className="h-4 w-4" />
                                </a>
                            </Button>
                        </Card>
                    ))}
                  </div>


                  


                </div>
              ))}
            </div>
          </div>
        )
      }