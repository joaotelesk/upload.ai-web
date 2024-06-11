import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/textarea'
import { FileVideo, Upload, Wand2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-center justify-between border-b px-6 py-3">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <p className="text-sm text-muted-foreground">
            Desenvolvido por <span className="text-violet-500">JoaoTelesk</span>
          </p>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">toggle theme</Button>
        </div>
      </div>
      <main className="flex flex-1 gap-6 p-6">
        <div className="flex flex-1 flex-col gap-4">
          <div className="grid flex-1 grid-rows-2 gap-4">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA..."
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável
            <code className="text-violet-500"> {'{transcription}'} </code> no
            seu prompt, adicione o conteúdo da sua transcrição do vídeo
            selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-5">
          <form className="space-y-4">
            <label
              htmlFor="video"
              className="flex aspect-video cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed text-sm text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="h-4 w-4" />
              <span>Selecione um vídeo</span>
            </label>
            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">Promp de transcrição</Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 resize-none leading-relaxed"
                placeholder="Inclua palavras-chave mensionadas no vídeo separadas por vírgula (,)"
              />
            </div>
            <Button type="submit" className="w-full">
              Carrega Vídeo
              <Upload className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <Separator />
          <form className="space-y-4">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Titulo do Youtube</SelectItem>
                  <SelectItem value="description">
                    Descrição do Youtube
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-Turbo 16K</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs italic text-muted-foreground">
                Você poderá customizar essa opção em breve.
              </span>
            </div>
            <Separator />
            <div className="space-y-4">
              <Label>Temperatura</Label>

              <Slider min={0} max={1} step={0.1} />

              <span className="block text-xs italic leading-relaxed text-muted-foreground">
                Valores mais altos tendem a deixar o resultado mais criativo,
                com possíveis erros.
              </span>
            </div>
            <Separator />

            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
