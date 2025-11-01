import { FC } from "react";
import {
    Instagram,
    Heart,
    Phone,
    Mail,
    RefreshCw,
    BarChart2,
    Download,
    Send,
    MapPin,
    Upload
} from "lucide-react";

interface InfluencerCardProps {
    name: string;
    category: string;
    location: string;
    gender: string;
    age: number;
    image: string;
}

const InfluencerCard: FC<InfluencerCardProps> = ({
    name,
    category,
    location,
    gender,
    age,
    image
}) => {
    return (
        <div className="flex items-center justify-between w-full bg-[#EFE5FF]/30 p-7 rounded-lg border border-[#e5e7eb]">

            {/* LEFT SECTION */}
            <div className="flex items-center gap-4">
                <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover" />

                <div>
                    <div className="flex items-center gap-1">
                        <Instagram size={14} className="text-pink-600 mr-1" />
                        <h3 className="font-semibold">{name}</h3>
                        <Upload size={18} className="cursor-pointer ml-3" />

                    </div>

                    <p className="text-sm text-gray-500">{category}</p>

                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin size={14} />
                        {location}
                    </div>
                </div>
            </div>

            {/* MIDDLE */}
            <div className="text-center px-6">
                <p className="text-xs text-gray-500">Gender, Age</p>
                <p className="font-semibold">{gender}, {age}</p>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-2">
                <button className="bg-[#ff462c] text-white text-sm px-3 py-1.5 rounded-md">
                    Invite to Campaign
                </button>
                <button className="bg-[#ff462c] text-white text-red-500 text-sm px-3 py-1.5 rounded-md">
                    Check Availability
                </button>
            </div>

            {/* ICON ACTIONS */}
            <div className="flex items-center gap-3 pl-4 text-gray-700">
                <Send size={18} className="cursor-pointer" />
                <Heart size={18} className="cursor-pointer" />
                <Phone size={18} className="cursor-pointer" />
                <Mail size={18} className="cursor-pointer" />
                <RefreshCw size={18} className="cursor-pointer" />
                <BarChart2 size={18} className="cursor-pointer" />
                <Download size={18} className="cursor-pointer" />
            </div>
        </div>
    );
};

export default InfluencerCard;
