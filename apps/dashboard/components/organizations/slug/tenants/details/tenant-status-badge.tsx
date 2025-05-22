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
        return { label: "Conectado", color: "!bg-green-400", icon: <CheckCircle className="w-4 h-4 mr-1" /> };
      case "PENDING":
        return { label: "Aguardando", color: "!bg-gray-400", icon: <Clock className="w-4 h-4 mr-1" /> };
      case "REVOKED":
        return { label: "Rejeitado", color: "!bg-red-500", icon: <XCircle className="w-4 h-4 mr-1" /> };
      case "ACTIVE":
        return { label: "Ativo", color: "!bg-green-400", icon: <CheckCircle className="w-4 h-4 mr-1" /> };
      case "CANCELED":
        return { label: "Inativo", color: "!bg-gray-400", icon: <XCircle className="w-4 h-4 mr-1" /> };
      case "FINISHED":
        return { label: "Finalizado", color: "!bg-blue-400", icon: <CheckCircle className="w-4 h-4 mr-1" /> };
      default:
        return { label: "Desconhecido", color: "!bg-gray-400", icon: <Clock className="w-4 h-4 mr-1" /> };
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
