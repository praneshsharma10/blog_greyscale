
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
          <div className="mx-auto">
            <h1 className="text-3xl ">
              tools & resources
            </h1>
            
            <div className="space-y-12">
              {resources.map((section) => (

                <div key={section.category}>
                  <h2 className="text-2xl ">
                    {section.category}
                  </h2>

                  


                  


                </div>
              ))}
            </div>
          </div>
        )
      }