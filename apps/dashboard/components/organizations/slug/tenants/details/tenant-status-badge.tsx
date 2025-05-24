import React from "react";
import { Badge } from "@workspace/ui/components/badge";
import { type InvitationStatus, StatusContract } from "@workspace/database"
import { CheckCircle, Clock, XCircle } from "lucide-react";

interface StatusBadgeProps {
  status: InvitationStatus | StatusContract;
  size?: "sm" | "md" | "lg";
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = "sm" }) => {
  const getStatusConfig = () => {
    switch (status) {
      case "ACCEPTED":
        return { label: "Conectado", color: "!bg-green-500 text-green-100", icon: <CheckCircle className="w-4 h-4 mr-1" /> };
      case "PENDING":
        return { label: "Aguardando", color: "!bg-gray-500 text-gray-200", icon: <Clock className="w-4 h-4 mr-1" /> };
      case "REVOKED":
        return { label: "Rejeitado", color: "!bg-red-500 text-red-200", icon: <XCircle className="w-4 h-4 mr-1" /> };
      case "ACTIVE":
        return { label: "Ativo", color: "!bg-green-500 text-green-100", icon: <CheckCircle className="w-4 h-4 mr-1" /> };
      case "CANCELED":
        return { label: "Inativo", color: "!bg-gray-500 text-gray-200", icon: <XCircle className="w-4 h-4 mr-1" /> };
      case "FINISHED":
        return { label: "Finalizado", color: "!bg-blue-500 text-blue-200", icon: <CheckCircle className="w-4 h-4 mr-1" /> };
      default:
        return { label: "Desconhecido", color: "!bg-gray-500 text-gray-200", icon: <Clock className="w-4 h-4 mr-1" /> };
    }
  };

  const { label, color, icon } = getStatusConfig();

  const sizeClass = {
    sm: "text-xs px-2",
    md: "text-sm py-1 px-3",
    lg: "text-base py-1.5 px-4",
  };

  return (
    <Badge className={`${color} ${sizeClass[size]} flex items-center rounded-full`} variant="default">
      {icon}
      {label}
    </Badge>
  );
};

export default StatusBadge;
