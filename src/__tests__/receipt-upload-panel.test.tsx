import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReceiptUploadPanel } from "@/components/receipt-upload-panel";

describe("ReceiptUploadPanel", () => {
  test("renderiza a feature de leitura por arquivo como scaffold", () => {
    const onSubmitExpense = jest.fn().mockResolvedValue(undefined);

    render(<ReceiptUploadPanel onSubmitExpense={onSubmitExpense} />);

    expect(
      screen.getByRole("heading", { name: "Saída por leitura de PDF ou imagem" }),
    ).toBeInTheDocument();
  });

  test("mostra o nome do arquivo selecionado para a análise", async () => {
    const user = userEvent.setup();
    const onSubmitExpense = jest.fn().mockResolvedValue(undefined);

    render(<ReceiptUploadPanel onSubmitExpense={onSubmitExpense} />);

    const input = screen.getByLabelText(/arquivo da nota fiscal/i);
    const file = new File(["dummy"], "nota-mercado.pdf", {
      type: "application/pdf",
    });

    await user.upload(input, file);

    expect(
      screen.getByText(/Arquivo pronto para análise:/i),
    ).toBeInTheDocument();
    expect(screen.getByText("nota-mercado.pdf")).toBeInTheDocument();
  });

  test("envia a nota, extrai os dados e salva a despesa", async () => {
    const originalFetch = global.fetch;
    const user = userEvent.setup();
    const onSubmitExpense = jest.fn().mockResolvedValue(undefined);

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        establishmentName: "Mercado Teste",
        amount: 150.0,
        suggestedCategory: "Alimentacao",
        purchaseDate: "2026-05-20",
      }),
    } as unknown as Response);

    render(<ReceiptUploadPanel onSubmitExpense={onSubmitExpense} />);

    const input = screen.getByLabelText(/arquivo da nota fiscal/i);
    const file = new File(["dummy"], "nota-mercado.pdf", {
      type: "application/pdf",
    });

    await user.upload(input, file);
    await user.click(
      screen.getByRole("button", { name: /analisar nota fiscal/i }),
    );

    await waitFor(() => {
      expect(onSubmitExpense).toHaveBeenCalledWith({
        amount: 150,
        category: "Alimentacao",
        date: "2026-05-20",
        title: "Mercado Teste",
      });
    });

    global.fetch = originalFetch;
  });
});
