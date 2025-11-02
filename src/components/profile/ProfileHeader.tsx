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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full bg-[#EFE5FF]/30 p-4 sm:p-6 lg:p-7 rounded-lg border border-[#e5e7eb] gap-4 lg:gap-0">

            {/* LEFT SECTION */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                <img src={image} alt={name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0" />

                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1 flex-wrap">
                        <Instagram size={14} className="text-pink-600 flex-shrink-0" />
                        <h3 className="font-semibold text-sm sm:text-base truncate">{name}</h3>
                        <Upload size={18} className="cursor-pointer ml-2 flex-shrink-0" />
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500 truncate">{category}</p>

                    <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                        <MapPin size={12} className="flex-shrink-0" />
                        <span className="truncate">{location}</span>
                    </div>
                </div>
            </div>

            {/* MIDDLE */}
            <div className="text-center px-0 sm:px-6 flex-shrink-0">
                <p className="text-[10px] sm:text-xs text-gray-500">Gender, Age</p>
                <p className="font-semibold text-sm sm:text-base">{gender}, {age}</p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                <button className="bg-[#ff462c] text-white text-xs sm:text-sm px-3 py-1.5 rounded-md whitespace-nowrap">
                    Invite to Campaign
                </button>
                <button className="bg-[#ff462c] text-white text-red-500 text-xs sm:text-sm px-3 py-1.5 rounded-md whitespace-nowrap">
                    Check Availability
                </button>
            </div>

            {/* ICON ACTIONS */}
            <div className="flex items-center justify-center lg:justify-end gap-2 sm:gap-3 pl-0 lg:pl-4 text-gray-700 flex-wrap">
                <Send size={16} className="sm:w-[18px] sm:h-[18px] cursor-pointer" />
                <Heart size={16} className="sm:w-[18px] sm:h-[18px] cursor-pointer" />
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] cursor-pointer" />
                <Mail size={16} className="sm:w-[18px] sm:h-[18px] cursor-pointer" />
                <RefreshCw size={16} className="sm:w-[18px] sm:h-[18px] cursor-pointer" />
                <BarChart2 size={16} className="sm:w-[18px] sm:h-[18px] cursor-pointer" />
                <Download size={16} className="sm:w-[18px] sm:h-[18px] cursor-pointer" />
            </div>
        </div>
    );
};

export default InfluencerCard;
