'use client'

import { Database, FileVideo, HardDrive, Eye, Clock, Users } from 'lucide-react'

const DataShowcase = () => {
  const datasets = [
    {
      id: 1,
      title: "Warehouse Object Recognition",
      description: "High-quality warehouse object detection dataset with boxes, pallets, and inventory items.",
      metrics: [
        { icon: Database, label: "1.2M Images", value: "1.2M Images" },
        { icon: FileVideo, label: "Video & RGB", value: "Video & RGB" },
        { icon: HardDrive, label: "150 GB", value: "150 GB" }
      ],
      category: "Object Detection"
    },
    {
      id: 2,
      title: "Autonomous Drone Navigation",
      description: "Aerial footage with GPS coordinates and obstacle detection for drone navigation training.",
      metrics: [
        { icon: Clock, label: "2.5K Hours", value: "2.5K Hours" },
        { icon: FileVideo, label: "4K Video & LiDAR", value: "4K Video & LiDAR" },
        { icon: HardDrive, label: "3.2 TB", value: "3.2 TB" }
      ],
      category: "Navigation"
    },
    {
      id: 3,
      title: "Human-Robot Interaction",
      description: "Human gestures, voice commands, and interaction patterns for intuitive robotic interfaces.",
      metrics: [
        { icon: Users, label: "10K Interactions", value: "10K Interactions" },
        { icon: FileVideo, label: "Audio & Video", value: "Audio & Video" },
        { icon: HardDrive, label: "75 GB", value: "75 GB" }
      ],
      category: "Interaction"
    },
    {
      id: 4,
      title: "Industrial Assembly Lines",
      description: "Factory floor data with robotic arm movements and quality control processes.",
      metrics: [
        { icon: Eye, label: "800K Samples", value: "800K Samples" },
        { icon: FileVideo, label: "Multi-Camera", value: "Multi-Camera" },
        { icon: HardDrive, label: "220 GB", value: "220 GB" }
      ],
      category: "Manufacturing"
    },
    {
      id: 5,
      title: "Agricultural Robot Training",
      description: "Crop identification and soil analysis data for precision farming robots.",
      metrics: [
        { icon: Database, label: "2M Plant Images", value: "2M Plant Images" },
        { icon: FileVideo, label: "Multispectral", value: "Multispectral" },
        { icon: HardDrive, label: "1.8 TB", value: "1.8 TB" }
      ],
      category: "Agriculture"
    },
    {
      id: 6,
      title: "Medical Surgical Robotics",
      description: "Surgical procedures data with robotic arm telemetry and patient monitoring.",
      metrics: [
        { icon: Clock, label: "1K Procedures", value: "1K Procedures" },
        { icon: FileVideo, label: "HD + Sensors", value: "HD + Sensors" },
        { icon: HardDrive, label: "500 GB", value: "500 GB" }
      ],
      category: "Medical"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" id="marketplace">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Our Datasets
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover high-quality, production-ready datasets that power the next generation 
            of robotics applications across industries.
          </p>
        </div>

        {/* Dataset Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datasets.map((dataset) => (
            <div
              key={dataset.id}
              className="card-hover bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group"
            >
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {dataset.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {dataset.description}
                </p>

                {/* Metrics and Button Row */}
                <div className="flex items-start justify-between">
                  {/* Metrics */}
                  <div className="space-y-2 flex-1">
                    {dataset.metrics.map((metric, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <metric.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="ml-4 bg-gray-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm whitespace-nowrap">
                    View Dataset
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse More CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            Browse All Datasets
          </button>
          <p className="text-gray-400 text-sm mt-4">
            Over 500+ datasets available across 20+ categories
          </p>
        </div>
      </div>
    </section>
  )
}

export default DataShowcase
