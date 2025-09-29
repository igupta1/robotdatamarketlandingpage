'use client'

import { Database, FileVideo, HardDrive, Eye, Clock, Users } from 'lucide-react'
import { useState, useRef } from 'react'

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

  // Video Card Component
  const VideoCard = ({ videoSrc, previewSrc }: { videoSrc: string; previewSrc: string }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };

    return (
      <div
        className="card-hover bg-white rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 shadow-lg group relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative aspect-video">
          {/* Static Preview Image */}
          <img
            src={previewSrc}
            alt="Video preview"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
            loading="lazy"
          />
          
          {/* Video Element */}
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            preload="none"
          />
        </div>
      </div>
    );
  };

  return (
    <section className="pt-0 pb-12 px-4 sm:px-6 lg:px-8 bg-white" id="marketplace">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 max-w-3xl mx-auto px-2">
            Datasets Coming Soon...
          </h2>
        </div>

        {/* Dataset Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {datasets.map((dataset) => {
            // All cards are now video cards - no text
            if (dataset.id === 1) {
              return <VideoCard key={dataset.id} videoSrc="/rgb_5sec-1.mov" previewSrc="/rgb_5sec_preview.jpg" />;
            }
            
            if (dataset.id === 2) {
              return <VideoCard key={dataset.id} videoSrc="/Plants.mov" previewSrc="/plants_preview.jpg" />;
            }
            
            if (dataset.id === 3) {
              return <VideoCard key={dataset.id} videoSrc="/Painting.mov" previewSrc="/painting_preview.jpg" />;
            }
            
            if (dataset.id === 4) {
              return <VideoCard key={dataset.id} videoSrc="/Video1.mov" previewSrc="/video1_preview.jpg" />;
            }
            
            if (dataset.id === 5) {
              return <VideoCard key={dataset.id} videoSrc="/Video2.mov" previewSrc="/video2_preview.jpg" />;
            }
            
            if (dataset.id === 6) {
              return <VideoCard key={dataset.id} videoSrc="/Folding.mov" previewSrc="/folding_preview.jpg" />;
            }
            
            // This should never be reached since all cards are now video cards
            return null;
          })}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-8 sm:mt-6">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 max-w-3xl mx-auto px-2">
            And Many More to Come...
          </h2>
        </div>

      </div>
    </section>
  )
}

export default DataShowcase
