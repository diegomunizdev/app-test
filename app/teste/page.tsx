type TestePageProps = {
  title: string;
};

export default function TestePage({ title }: TestePageProps) {
  return (
    <div data-testid="testando">
      <h1>{title}</h1>
    </div>
  );
}
