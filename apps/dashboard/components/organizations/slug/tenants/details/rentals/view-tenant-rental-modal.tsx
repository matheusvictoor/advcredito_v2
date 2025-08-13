"use client";

import NiceModal, {
  type NiceModalHocProps,
  useModal,
} from "@ebay/nice-modal-react";

import { APP_DESCRIPTION, APP_NAME } from "@workspace/common/app";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import { Separator } from "@workspace/ui/components/separator";
import Decimal from "decimal.js";
import { Building, Calendar, FileText } from "lucide-react";
import { formatDateBR } from "~/lib/fomatDateBR";
import { formatCurrency, getTypeProperty } from "~/lib/formatters";
import type { TenantContractDto } from "~/types/dtos/tenant-contract-dto";

export type ViewTenantRentalModalProps = NiceModalHocProps & {
  contract: TenantContractDto;
  totalCharge: Decimal;
  totalMonthly: Decimal;
};

export const ViewTenantRentalModal = NiceModal.create(
  ({ contract }: ViewTenantRentalModalProps) => {
    const modal = useModal();

    return (
      <Dialog open={modal.visible} onOpenChange={() => modal.hide()}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-blue-600" />
              <span>Contrato de Locação</span>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-blue-800">
                      {APP_NAME}
                    </h1>
                    <p className="text-blue-700">{APP_DESCRIPTION}</p>
                    <div className="mt-2 text-sm text-blue-600">
                      <p>CNPJ: 12.345.678/0001-90</p>
                      <p>
                        Endereço: Rua das Flores, 123 - Centro - São Paulo/SP
                      </p>
                      <p>
                        Telefone: (11) 99999-9999 | Email:
                        contato@imobiliaria.com.br
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-blue-600">Contrato Nº</p>
                    <p className="text-lg font-bold text-blue-800">
                      {contract.id}
                    </p>
                    <p className="text-sm text-blue-600">
                      Data: {formatDateBR(contract.startContract, "dd/MM/yyyy")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Building className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold">Dados do Imóvel</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Tipo de Imóvel</p>
                    <p className="font-medium">
                      {getTypeProperty(contract.propertyType)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Número/Identificação
                    </p>
                    <p className="font-medium">{contract.p_number}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Endereço</p>
                    <p className="font-medium">{contract.p_street}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Cidade</p>
                    <p className="font-medium">{contract.p_city}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold">
                    Detalhes do Contrato
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Período do Contrato:</span>
                    <span className="font-medium">
                      {formatDateBR(contract.startContract, "dd/MM/yyyy")} -{" "}
                      {formatDateBR(contract.endContract, "dd/MM/yyyy")}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Vencimento do Aluguel:</span>
                    <span className="font-medium">
                      Todo dia {formatDateBR(contract.dueRental, "dd")}
                    </span>
                  </div>

                  <Separator />
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">
                        Valor do Aluguel:
                      </span>
                      <span className="text-lg font-semibold text-blue-600">
                        {formatCurrency(new Decimal(contract.rental))}
                      </span>
                    </div>

                    {contract.charges.length > 0 && (
                      <>
                        <div className="space-y-2">
                          <p className="font-semibold text-gray-700">
                            Encargos:
                          </p>
                          {contract.charges.map((charge, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center pl-4"
                            >
                              <span className="text-sm">
                                {charge.description || charge.type}:
                              </span>
                              <span className="font-medium">
                                {formatCurrency(new Decimal(charge.value))}
                              </span>
                            </div>
                          ))}
                          <div className="flex justify-between items-center pl-4 border-t pt-2">
                            <span className="font-semibold">
                              Subtotal Encargos:
                            </span>
                            <span className="font-semibold">
                              {formatCurrency(
                                new Decimal(contract.totalCharges),
                              )}
                            </span>
                          </div>
                        </div>
                        <Separator />
                      </>
                    )}

                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total Mensal:</span>
                      <span className="text-green-600">
                        {formatCurrency(totalMonthly)}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-3 pt-4 border-t">
              <Button
                variant="outline"
                onClick={() => modal.hide()}
                className="flex-1"
              >
                Fechar
              </Button>
              {/* <Button variant="outline" onClick={handlePrint} className="flex-1">
              <FileText className="h-4 w-4 mr-2" />
              Imprimir
            </Button>
            <Button onClick={handleDownloadPDF} className="flex-1 bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Baixar PDF
            </Button> */}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  },
);
